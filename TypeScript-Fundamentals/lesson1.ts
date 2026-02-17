// 'any' type
let value: any = 1
value.toUpperCase()
value = "Hi"
value.map()

// Important Note:
/* 
🧠 When should I use any?
❌ Short answer: Avoid using any whenever possible.

Using any:
turns off type checking
removes IntelliSense
removes TypeScript safety
makes your code behave like plain JavaScript

So you lose the main benefit of TypeScript.

✅ One legitimate use case
You can use any temporarily when:
You are migrating a large JavaScript codebase → to TypeScript

and:

you don’t have time to write proper types yet
the types are very complex
you just need the app to compile for now

So any acts as:
👉 a temporary escape hatch, not a real solution.

⚠️ Important rule
Use `any` as a temporary workaround — not as a final type.

You should plan to replace it later with proper types.
*/