# CampusTax - Unit Testing Guide

## סקירה כללית

הוגדרה מסגרת בדיקות מקיפה באמצעות **Vitest** לפרויקט CampusTax. הבדיקות כוללות 79 בדיקות יחידה המכסות את פונקציות ה-utility העיקריות בפרויקט.

## התקנה

כל התלויות הדרושות כבר הותקנו:

```bash
npm install -D vitest @vitest/ui
```

## הפעלת הבדיקות

### הפעלה בסיסית
```bash
npm test
```

### הפעלה עם UI interaktיבי
```bash
npm run test:ui
```

### הפעלה עם Coverage report
```bash
npm run test:coverage
```

## מבנה הבדיקות

הבדיקות ממוקמות ב-`src/lib/__tests__/` וכוללות:

### 1. **sanitise.test.ts** (21 בדיקות)
בדיקות לפונקציות ניקוי קלט:
- `sanitiseField()` - ניקוי שדות עם גבול אורך משתנה
- `sanitiseShort()` - ניקוי לשדות קצרים (מקסימום 100 תווים)

**מה נבדק:**
- הסרת תגיות HTML
- גיזום מחרוזות ארוכות
- טיפול בערכים null/undefined
- התאמה לערכים בעלי סוגים שונים (מספרים, boolean)

### 2. **constants.test.ts** (24 בדיקות)
בדיקות for קבועים וקונפיגורציה:
- פרטי האתר (URL, שם, תגיית)
- מידע משפטי (ABN, TPB, טבע משפטי)
- שילוב WhatsApp (`waLink()`)
- פרטי מס (בדוקות, שיעורי מס)

**מה נבדק:**
- תקינות פורמט ABN
- קידוד נכון ב-URL של WhatsApp
- סדר בדוקות מס עולה
- ערכי קבועים קריטיים

### 3. **rate-limit.test.ts** (8 בדיקות)
בדיקות לפונקציית הגבלת קצב:
- `isRateLimited()` - בדיקה האם בקשה חרגה מהגבול

**מה נבדק:**
- מענה להבקשה הראשונה
- הקצה של 5 בקשות בחלון זמן
- חסימה בבקשה ה-6
- יציאות עצמאיות לכתובות IP שונות
- buckets עצמאיים

### 4. **jsonld.test.ts** (11 בדיקות)
בדיקות ל-serialization בטוח של JSON:
- `jsonLd()` - escape של תווים עבור תגיות script

**מה נבדק:**
- escape של סוגריים זוויתיים
- כניסה בטוחה בתגיות script
- שמירה על תקינות JSON
- תמיכה בעצמים קינונים ומערכים

### 5. **get-ip.test.ts** (15 בדיקות)
בדיקות לחילוץ כתובת IP של הלקוח:
- `getClientIp()` - זיהוי כתובת IP מ-headers

**מה נבדק:**
- עדיפות של headers (`x-vercel-forwarded-for` > `x-forwarded-for` > `x-real-ip`)
- שימוש ב-IP האחרון ברשימות מפוצלות בפסיקים
- גיזום לבנים
- ערכי fallback

## קריאה של תוצאות

```
Test Files   5 passed (5)
     Tests   79 passed (79)
   Start at  11:27:56
   Duration  1.91s
```

✅ **הכל עובר** - כל 79 הבדיקות עברו בהצלחה!

## הוספת בדיקות נוספות

כדי להוסיף בדיקות לקבצים אחרים, תן:

1. **יצור קובץ בדיקה:**
```typescript
// src/lib/__tests__/new-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '../new-function'

describe('myFunction', () => {
  it('should do something', () => {
    expect(myFunction('input')).toBe('expected')
  })
})
```

2. **הפעל את הבדיקות:**
```bash
npm test
```

## פרטים טכניים

### Vitest Configuration
ערוצי ה-Vitest:
- **Environment:** Node.js
- **Coverage Provider:** V8
- **Coverage Output:** Text, JSON, HTML

ראה `vitest.config.ts` לפרטים נוספים.

### Dependencies
- `vitest@^4.1.10` - מסגרת הבדיקות
- `@vitest/ui@^0.34` - ממשק interactive לתוצאות

## Best Practices

1. **שם בדיקות ברור:**
   - השתמש ב-describe blocks לקבוצות
   - תן שמות בתיאור ברור למה נבדק

2. **כיסוי edge cases:**
   - בדוק ערכים null/undefined
   - בדוק קלטים בעלי סוגים שונים
   - בדוק גבולות (strings ארוכות, מספרים גבוהים, וכו')

3. **בדוקות עצמאיות:**
   - כל בדיקה צריכה להיות בלתי תלויה
   - הימנע ממצב משותף בין בדיקות כשניתן

4. **Mocking חיצוניים:**
   - Mock ספריות חיצוניות כמו NextRequest
   - Mock זמן כאשר נדרש (vi.useFakeTimers())

## קבצים שדורשים בדיקות נוספות

הקבצים הבאים עדיין אין להם בדיקות מלאות וניתן להרחיב אותן:

1. **lead-handler.ts** - דורש mocking של DB ו-upload
2. **db.ts** - דורש בדיקות לעובדות מסד נתונים
3. **upload.ts** - דורש בדיקות לטיפול בקבצים
4. **compress-image.ts** - דורש מדמה של Canvas API

## Troubleshooting

### שגיאה: "Cannot find module"
- ודא שקובצי ה-import משתמשים ב-paths נכונים
- בדוק שהקבצים קיימים

### שגיאה: "Module state shared between tests"
- השתמש ב-IP/bucket שונים בכל בדיקה
- השתמש ב-beforeEach אם נדרש reset

### Tests איטיים
- בדוק את הזמן בפלט
- שקול לעזוב מקבילי tests במספרי עובדים שונים

## קישורים שימושיים

- [Vitest Documentation](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Jest Matchers](https://jestjs.io/docs/expect)

---

נוצר: 2026-08-06
Version: 1.0
