import Icon from '../../../../Components/Icon'

import skillBack from '../../../../Data/skillBack.json'

import { TSkill } from '../../../../Types'

export default function Back() {
  return (
    <div className="px-8">
      <h2 className="font-semibold text-2xl mb-5">My Skills</h2>
      <div className="mb-5">
        <h3 className="mb-2 text-xl text-gold-color">Back-end</h3>
          <ul className="grid grid-cols-3 gap-4">
            {skillBack.map((skill: TSkill) => (
              <li key={skill.id} className="bg-gradient-card rounded-xl">
                <div className="bg-[#202022] rounded-xl p-5 flex items-center">
                    <Icon label={skill.label} />
                    <span>{skill.label}</span>
                </div>
              </li>
                ))}
          </ul>
      </div>
    </div>
  )
}