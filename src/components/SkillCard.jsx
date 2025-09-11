const SkillCard = ({ name, level, note }) => {
return (
<div className="rounded-2xl border p-4">
<div className="flex items-center justify-between">
<h3 className="font-semibold">{name}</h3>
<span className="text-xs px-2 py-1 rounded-full border">{level}</span>
</div>
{note && <p className="text-sm mt-2 text-gray-600">{note}</p>}
</div>
)
}
export default SkillCard