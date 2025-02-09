---
layout: post
title: Ensuring type safety in Angular with Zod
published: true
categories: software angular
tags: zod typescript api
---

When working with APIs in [Angular](https://angular.dev/) it can be easy to think providing the return type when calling 'http.get' will ensure type safety. And it will - sort-of. At least, it will _appear to_.

<!--more-->

## What is Zod?

If you're not familiar with [Zod](https://github.com/colinhacks/zod) then check out the documentation for a [full explanation](https://zod.dev/), for my purposes though, the tagline sums it up well:

> TypeScript-first schema validation with static type inference

## Why Use Zod in Angular?

Unlike TypeScript's static typing, [Zod](https://github.com/colinhacks/zod) ensures that data conforms to the expected structure **at runtime**, making it useful when dealing with API responses.

- **Ensures runtime type safety** – Prevents unexpected API data from causing issues.
- **Simplifies validation** – Define data structures once and validate seamlessly.
- **Works well with TypeScript** – Infers types directly from schemas, reducing redundancy.

## Using Zod in an Angular Service

To use [Zod](https://github.com/colinhacks/zod) in an [Angular](https://angular.dev/) project:

1. **Install Zod**

   ```sh
   npm install zod
   ```

2. **Define a Schema**

   ```typescript
   import { z } from "zod";

   const UserSchema = z.object({
     id: z.number(),
     name: z.string(),
     email: z.string().email(),
   });

   type User = z.infer<typeof UserSchema>;
   ```

3. **Validate API Response in an Angular Service**

   ```typescript
   import { HttpClient } from "@angular/common/http";
   import { Injectable } from "@angular/core";
   import { Observable, map } from "rxjs";
   import { z } from "zod";

   @Injectable({ providedIn: "root" })
   export class UserService {
     private apiUrl = "https://api.example.com/users";

     constructor(private http: HttpClient) {}

     getUsers(): Observable<User[]> {
       return this.http.get<unknown[]>(this.apiUrl).pipe(
         map((dto) => {
           const parsed = z.array(UserSchema).safeParse(dto);
           if (!parsed.success) {
             console.error("Invalid data received:", parsed.error);
             return [];
           }
           return parsed.data;
         })
       );
     }
   }
   ```

The critical ppoint - _we_ know what the _unknown_ type _should_ be and [Zod](https://github.com/colinhacks/zod) ensure it is, or gives us an error (see some of the additional resources for more production ready implementations).

## Conclusion

[Zod](https://github.com/colinhacks/zod) is a powerful tool for ensuring type safety in [Angular](https://angular.dev/) applications. I've found it particularly useful when working on backend and frontend changes together as it immediately flags when I've modified the backend DTO structure - ensuring I remember to update things in [Angular](https://angular.dev/) before moving on.

## Additional resource

More comprehensive explanations:

- [Tim Deschryver's blog](https://timdeschryver.dev/blog/why-we-should-verify-http-response-bodies-and-why-we-should-use-zod-for-this)
- [Angular.love](https://angular.love/parsing-and-mapping-api-response-using-zod-js)
