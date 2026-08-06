import type { Guide } from '../types'
import { residencyGuides } from './residency'
import { tfnGuides } from './tfn'
import { workGuides } from './work'
import { abnGuides } from './abn'
import { superGuides } from './super'
import { medicareScholarshipGuides } from './medicare-scholarships'
import { batch3Guides } from './batch3'
import { batch4Guides } from './batch4'
import { batch5Guides } from './batch5'

export const guides: Guide[] = [
  ...residencyGuides,
  ...tfnGuides,
  ...abnGuides,
  ...workGuides,
  ...superGuides,
  ...medicareScholarshipGuides,
  ...batch3Guides,
  ...batch4Guides,
  ...batch5Guides,
]

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export const clusters = Array.from(new Set(guides.map((g) => g.cluster)))
