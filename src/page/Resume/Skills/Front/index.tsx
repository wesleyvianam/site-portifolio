import Icon from '../../../../Components/Icon'

import skillFront from '../../../../Data/skillFront.json'

import { TSkill } from '../../../../Types'

export default function Front() {
  return (
    <div className="px-8">
      <div>
        <h3 className="mb-2 text-xl text-gold-color">Front-end</h3>
        <ul className="grid grid-cols-3 gap-4">
          {skillFront.map((skill: TSkill) => (
            <li className="bg-gradient-card rounded-xl">
              <div key={skill.id} className="bg-[#202022] rounded-xl p-5 flex items-center">
                <Icon label={skill.label} />
                {skill.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}