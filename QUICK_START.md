# CampusTax Tests - Quick Start Guide

## 🚀 התחלה מהירה

### 1. בדוק ש-Vitest מותקן
```bash
npm list vitest
```

### 2. הפעל את הבדיקות
```bash
npm test
```

תוצאה צפויה:
```
✓ Test Files   5 passed (5)
✓ Tests        79 passed (79)
```

---

## 📊 Commands

| פקודה | תיאור |
|-------|-------|
| `npm test` | הפעל בדיקות בשורה |
| `npm run test:ui` | פתח UI interactive |
| `npm run test:coverage` | צור coverage report |

---

## 📁 מבנה הקבצים

```
campustax/
├── vitest.config.ts           # Vitest config
├── src/lib/
│   ├── sanitise.ts            # Input validation
│   ├── constants.ts           # Config & constants
│   ├── rate-limit.ts          # Rate limiting
│   ├── jsonld.ts              # JSON-LD utils
│   ├── get-ip.ts              # IP extraction
│   └── __tests__/             # בדיקות 📍
│       ├── sanitise.test.ts   # 21 בדיקות
│       ├── constants.test.ts  # 24 בדיקות
│       ├── rate-limit.test.ts # 8 בדיקות
│       ├── jsonld.test.ts     # 11 בדיקות
│       └── get-ip.test.ts     # 15 בדיקות
```

---

## ✅ בדיקות קיימות

### sanitise.test.ts (21)
```typescript
✅ null handling
✅ HTML tag removal
✅ String truncation
✅ Type conversion
```

### constants.test.ts (24)
```typescript
✅ Site configuration
✅ Legal requirements
✅ WhatsApp integration
✅ Tax information
```

### rate-limit.test.ts (8)
```typescript
✅ Request limiting
✅ IP isolation
✅ Bucket isolation
✅ Rate enforcement
```

### jsonld.test.ts (11)
```typescript
✅ Safe escaping
✅ XSS prevention
✅ JSON validity
✅ Nested objects
```

### get-ip.test.ts (15)
```typescript
✅ Header priority
✅ IP extraction
✅ Whitespace handling
✅ Fallback logic
```

---

## 🆕 הוספת בדיקה חדשה

### 1. יצור קובץ בדיקה
```typescript
// src/lib/__tests__/my-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '../my-function'

describe('myFunction', () => {
  it('should do something', () => {
    expect(myFunction('input')).toBe('output')
  })
})
```

### 2. הפעל את הבדיקות
```bash
npm test
```

### 3. צפה בתוצאות
```
✓ src/lib/__tests__/my-function.test.ts (1)
```

---

## 🎯 תבנית בדיקה נפוצה

```typescript
import { describe, it, expect } from 'vitest'
import { myFunction } from '../my-function'

describe('myFunction', () => {
  // Happy path
  it('should work correctly', () => {
    expect(myFunction('valid')).toBe('expected')
  })

  // Edge cases
  it('should handle empty input', () => {
    expect(myFunction('')).toBe('')
  })

  it('should handle null', () => {
    expect(myFunction(null)).toBe('default')
  })

  // Error cases
  it('should throw on invalid input', () => {
    expect(() => myFunction(-1)).toThrow()
  })
})
```

---

## 🔍 Debugging

### הפעל בדיקה יחידה
```bash
npx vitest run src/lib/__tests__/sanitise.test.ts
```

### הפעל בדיקות עם debug info
```bash
npx vitest --reporter=verbose
```

### Watch mode (auto-rerun)
```bash
npx vitest --watch
```

---

## 📈 Coverage

### צור report
```bash
npm run test:coverage
```

### פתח דוח HTML
```bash
open coverage/index.html
```

---

## 🐛 Troubleshooting

### בדיקות מתחברות
**בעיה:** בדיקות משתפות state בין בדיקות

**פתרון:** השתמש בערכים שונים לכל בדיקה
```typescript
// ❌ לא טוב
it('test 1', () => {
  const ip = '192.168.1.1'
})

it('test 2', () => {
  const ip = '192.168.1.1' // shared!
})

// ✅ טוב
it('test 1', () => {
  const ip = '192.168.1.1'
})

it('test 2', () => {
  const ip = '192.168.1.2' // isolated!
})
```

### Import errors
**בעיה:** "Cannot find module"

**פתרון:** בדוק paths בtsconfig.json
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Module not found
**בעיה:** "Module X not found"

**פתרון:** בדוק שהקובץ קיים ו-import correct

---

## 📝 Assertions בשימוש

```typescript
expect(value).toBe(expected)              // ===
expect(array).toContain('item')           // includes
expect(string).toMatch(/regex/)           // regex match
expect(fn).toHaveBeenCalled()             // spy check
expect(fn).toThrow()                      // error check
expect(value).toBeDefined()               // not undefined
expect(obj).toHaveProperty('key')         // property check
```

---

## 🔗 Links

| Resource | Link |
|----------|------|
| Vitest Docs | https://vitest.dev |
| Jest Matchers | https://jestjs.io/docs/expect |
| Testing Guide | See TESTING_GUIDE.md |
| Patterns | See TEST_PATTERNS.md |

---

## ✨ Next Steps

1. ✅ **Run tests**: `npm test`
2. 📝 **Read patterns**: See TEST_PATTERNS.md
3. 🔄 **Add more tests**: Follow the templates
4. 📊 **Check coverage**: `npm run test:coverage`
5. 🚀 **Submit PR**: Include test results

---

**💡 Tips:**
- בדוק בדיקות ברגע שכותב קוד
- כתוב בדיקות לפני features חדשות
- שמור בדיקות קטנות ופשוטות
- Commit בדיקות עם הקוד

---

**Version:** 1.0 | **Last Updated:** 2026-08-06
