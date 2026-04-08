export default function ProfileAvatar({
  name = "Sarath",
  initials,
  size = 92,
}) {
  const computedInitials = initials
    ? initials
    : name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join("");

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      aria-label={`Profile avatar for ${name}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-[2px] shadow-lg">
        <div className="h-full w-full rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
          <span className="text-3xl font-extrabold text-gray-900">{computedInitials}</span>
        </div>
      </div>
    </div>
  );
}

