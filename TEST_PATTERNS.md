# Test Patterns & Examples for CampusTax

## טבלת תוכן
1. [Basic Unit Tests](#basic-unit-tests)
2. [Testing Async Functions](#testing-async-functions)
3. [Testing with Mocks](#testing-with-mocks)
4. [Testing Edge Cases](#testing-edge-cases)
5. [Integration Test Patterns](#integration-test-patterns)

---

## Basic Unit Tests

### Pattern: בדיקת פונקציה פשוטה

```typescript
import { describe, it, expect } from 'vitest'
import { simpleFunction } from '../simple-function'

describe('simpleFunction', () => {
  it('should return expected value', () => {
    const result = simpleFunction('input')
    expect(result).toBe('expected')
  })

  it('should handle edge case', () => {
    expect(simpleFunction('')).toBe('')
  })
})
```

### Pattern: בדיקות עם beforeEach/afterEach

```typescript
describe('Setup and Teardown', () => {
  let testData: any

  beforeEach(() => {
    // Setup before each test
    testData = { value: 10 }
  })

  afterEach(() => {
    // Cleanup after each test
    testData = null
  })

  it('should use setup data', () => {
    expect(testData.value).toBe(10)
  })
})
```

### Pattern: Grouped Assertions

```typescript
describe('Object validation', () => {
  const testObject = { name: 'John', age: 30, email: 'john@example.com' }

  it('should have all required properties', () => {
    expect(testObject).toHaveProperty('name')
    expect(testObject).toHaveProperty('age')
    expect(testObject).toHaveProperty('email')
  })

  it('should have correct types', () => {
    expect(typeof testObject.name).toBe('string')
    expect(typeof testObject.age).toBe('number')
  })
})
```

---

## Testing Async Functions

### Pattern: בדיקת Promise

```typescript
describe('asyncFunction', () => {
  it('should resolve with value', async () => {
    const result = await asyncFunction()
    expect(result).toBe('expected')
  })

  it('should reject with error', async () => {
    await expect(asyncFunction('invalid')).rejects.toThrow('Error message')
  })
})
```

### Pattern: בדיקת API Calls

```typescript
describe('API Integration', () => {
  it('should fetch data correctly', async () => {
    const result = await fetchUserData(123)
    
    expect(result).toBeDefined()
    expect(result.id).toBe(123)
    expect(result.email).toMatch(/@example\.com$/)
  })
})
```

---

## Testing with Mocks

### Pattern: Mocking External Functions

```typescript
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { getUserFromDb, processUser } from '../user-service'

vi.mock('../user-service', () => ({
  getUserFromDb: vi.fn(),
}))

describe('User Processing', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should process user data', async () => {
    vi.mocked(getUserFromDb).mockResolvedValue({
      id: 1,
      name: 'John',
    })

    const result = await processUser(1)
    expect(result.name).toBe('John')
  })

  it('should handle errors', async () => {
    vi.mocked(getUserFromDb).mockRejectedValue(
      new Error('Database error')
    )

    await expect(processUser(1)).rejects.toThrow()
  })
})
```

### Pattern: Mocking NextRequest

```typescript
function createMockRequest(headers: Record<string, string>): NextRequest {
  const headerMap = new Map(Object.entries(headers))
  return {
    headers: {
      get: (key: string) => headerMap.get(key.toLowerCase()) || null,
    } as any,
  } as NextRequest
}

describe('NextRequest Processing', () => {
  it('should extract header correctly', () => {
    const req = createMockRequest({
      'authorization': 'Bearer token123',
    })
    
    expect(req.headers.get('authorization')).toBe('Bearer token123')
  })
})
```

### Pattern: Spying on Functions

```typescript
describe('Function Calls', () => {
  it('should call function with correct arguments', () => {
    const spy = vi.fn()
    spy('test', 123)
    
    expect(spy).toHaveBeenCalledWith('test', 123)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
```

---

## Testing Edge Cases

### Pattern: בדיקת boundary conditions

```typescript
describe('Boundary Conditions', () => {
  it('should handle minimum value', () => {
    expect(calculatePrice(0)).toBe(0)
  })

  it('should handle maximum value', () => {
    expect(calculatePrice(Number.MAX_SAFE_INTEGER)).toBeDefined()
  })

  it('should handle negative values', () => {
    expect(calculatePrice(-100)).toThrow()
  })
})
```

### Pattern: בדיקת null/undefined

```typescript
describe('Null/Undefined Handling', () => {
  const testFunction = (value: string | null | undefined) => {
    return value?.toUpperCase() ?? 'DEFAULT'
  }

  it('should handle null', () => {
    expect(testFunction(null)).toBe('DEFAULT')
  })

  it('should handle undefined', () => {
    expect(testFunction(undefined)).toBe('DEFAULT')
  })

  it('should process valid string', () => {
    expect(testFunction('hello')).toBe('HELLO')
  })
})
```

### Pattern: בדיקת strings ארוכים

```typescript
describe('String Length Handling', () => {
  it('should process empty string', () => {
    expect(sanitize('')).toBe('')
  })

  it('should truncate very long strings', () => {
    const longString = 'a'.repeat(1000)
    const result = sanitize(longString)
    expect(result.length).toBeLessThanOrEqual(500)
  })

  it('should preserve short strings', () => {
    expect(sanitize('hello')).toBe('hello')
  })
})
```

---

## Integration Test Patterns

### Pattern: בדיקת Form Submission

```typescript
describe('Form Handler', () => {
  it('should validate and submit form', async () => {
    const mockSubmit = vi.fn().mockResolvedValue({ ok: true })
    
    const formData = new FormData()
    formData.append('name', 'John')
    formData.append('email', 'john@example.com')
    
    const result = await handleFormSubmit(formData, mockSubmit)
    
    expect(mockSubmit).toHaveBeenCalledWith(expect.any(FormData))
    expect(result.ok).toBe(true)
  })

  it('should show validation errors', async () => {
    const formData = new FormData()
    formData.append('name', '')
    
    const result = await handleFormSubmit(formData)
    
    expect(result.errors).toContain('Name is required')
  })
})
```

### Pattern: בדיקת Rate Limiting

```typescript
describe('Rate Limiter Integration', () => {
  it('should allow normal request rate', async () => {
    for (let i = 0; i < 5; i++) {
      const result = await isRateLimited('192.168.1.1', 'api')
      expect(result).toBe(false)
    }
  })

  it('should block requests after limit', async () => {
    // Make 5 requests
    for (let i = 0; i < 5; i++) {
      await isRateLimited('192.168.1.1', 'api')
    }
    
    // 6th should be blocked
    const result = await isRateLimited('192.168.1.1', 'api')
    expect(result).toBe(true)
  })
})
```

### Pattern: בדיקת Database Interactions

```typescript
describe('Database Operations', () => {
  beforeEach(async () => {
    // Setup test database
    await setupTestDb()
  })

  afterEach(async () => {
    // Cleanup
    await cleanupTestDb()
  })

  it('should create user record', async () => {
    const user = await createUser({
      name: 'John',
      email: 'john@example.com',
    })
    
    expect(user.id).toBeDefined()
    expect(user.email).toBe('john@example.com')
  })

  it('should update user record', async () => {
    const user = await createUser({ name: 'John' })
    await updateUser(user.id, { name: 'Jane' })
    
    const updated = await getUser(user.id)
    expect(updated.name).toBe('Jane')
  })
})
```

---

## Useful Assertions

### Common Matchers

```typescript
// Equality
expect(value).toBe(expected)           // ===
expect(value).toEqual(expected)        // Deep equality
expect(value).toStrictEqual(expected)  // Strict equality

// Truthiness
expect(value).toBeTruthy()
expect(value).toBeFalsy()
expect(value).toBeDefined()
expect(value).toBeUndefined()
expect(value).toBeNull()

// Numbers
expect(value).toBeGreaterThan(5)
expect(value).toBeLessThan(10)
expect(value).toBeCloseTo(3.14)

// Strings
expect(text).toContain('substring')
expect(text).toMatch(/regex/)
expect(text).toHaveLength(5)

// Arrays
expect(array).toHaveLength(3)
expect(array).toContain('item')
expect(array).toEqual(['a', 'b', 'c'])

// Objects
expect(obj).toHaveProperty('name')
expect(obj).toMatchObject({ name: 'John' })

// Functions
expect(fn).toHaveBeenCalled()
expect(fn).toHaveBeenCalledTimes(1)
expect(fn).toHaveBeenCalledWith('arg')
expect(fn).toThrow()
expect(fn).toThrowError('message')
```

---

## Best Practices Checklist

- ✅ כל בדיקה בדוקה רק דבר אחד
- ✅ שמות בדיקות ברורים ותיאוריים
- ✅ Setup/Teardown כשנדרש
- ✅ Avoid magic strings/numbers
- ✅ Test both happy path and error cases
- ✅ Use descriptive assertion messages
- ✅ Keep tests DRY (Don't Repeat Yourself)
- ✅ Test edge cases and boundaries
- ✅ Mock external dependencies
- ✅ Group related tests with describe()

---

## דוגמה מלאה: Lead Form Handler

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { handleLeadSubmission } from '../lead-handler'
import { createTask } from '../db'
import { uploadFiles } from '../upload'

vi.mock('../db')
vi.mock('../upload')

describe('Lead Form Handler', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should successfully submit valid lead', async () => {
    const mockReq = createMockRequest({
      'x-forwarded-for': '203.0.113.1',
    })

    const formData = new FormData()
    formData.append('email', 'test@example.com')
    formData.append('fullName', 'Test User')
    formData.append('whatsapp', '+61412345678')

    vi.mocked(createTask).mockResolvedValue({ id: 'task-1' })

    const result = await handleLeadSubmission(mockReq)

    expect(createTask).toHaveBeenCalled()
    expect(result.ok).toBe(true)
  })

  it('should validate required fields', async () => {
    const mockReq = createMockRequest({})

    const formData = new FormData()
    // Missing required fields

    const result = await handleLeadSubmission(mockReq)

    expect(result.ok).toBe(false)
    expect(result.error).toBe('missing_fields')
  })

  it('should respect rate limiting', async () => {
    const mockReq = createMockRequest({})

    // Simulate rate limited response
    const result = await handleLeadSubmission(mockReq)

    expect(result.status).toBe(429) // Too Many Requests
  })
})
```

---

## Resources

- [Vitest API Reference](https://vitest.dev/api/)
- [Testing Best Practices](https://testingjavascript.com)
- [Jest Expect Matchers](https://jestjs.io/docs/expect)

---

**Version:** 1.0 | **Updated:** 2026-08-06
