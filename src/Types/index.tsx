import project from '../Data/project.json'
import tag from '../Data/tag.json'
import iconFront from '../Data/skillFront.json'
import iconBack from '../Data/skillBack.json'

export type TProject = typeof project[0]

export type TTag = typeof tag[0]

export type TSkill = {
  id: number,
  label: string
}

export type TExperience = {
  id: number
  title: string,
  at: string,
  time: string,
  description: string,
}

export type TEducation = {
  id: number
  title: string,
  at: string,
  time: string,
  description: string,
}