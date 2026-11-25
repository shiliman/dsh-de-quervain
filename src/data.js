export const DATA = {
  id: 'dsh-de-quervain',
  name: '腱鞘炎',
  prefix: 'thumb',
  label: '腱鞘炎',
  defaultEeriness: 2,
  gain: 0.34,
  flareChance: 0.24,
  flareGain: 18,
  triggerWeight: 1,
  flareWeight: 0.9,
  reliefs: [
    { id: 'splint', label: '戴上拇指护具', relief: 16, minutes: 60, calm: 5 },
    { id: 'ice', label: '冰敷拇指根', relief: 14, minutes: 20, calm: 5 },
    { id: 'rest', label: '这只手少用', relief: 18, minutes: 40, calm: 6 },
  ],
  body: {
    stiff: '右手拇指根有点酸，拧瓶盖的时候最明显。',
    ache: '拇指一使劲就扯着疼，抱东西、拎袋子都得换左手；打字久了发僵。',
    flare: '拇指根肿起来，连捏手机都疼；只能用食指和中指夹着拿。',
  },
  voice: {
    base: '打字相关的描述允许出现一两个漏字（真的漏一个键那种）；拿东西换手很正常，不说疼。',
    flare: '允许说「这个我捏不住」；不要演成整只手不能用。',
  },
}
