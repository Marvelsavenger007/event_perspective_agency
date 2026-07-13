// Generates a consistent, distinct-looking initials avatar per person
// until a real photo is supplied. Pass a real `image` and it takes priority.

const PALETTE = [
  { bg: "#C9A84C", text: "#0A0F1E" }, // gold
  { bg: "#E87461", text: "#0A0F1E" }, // coral
  { bg: "#4A7A9D", text: "#F5F0E8" }, // azure
  { bg: "#3C8C6E", text: "#F5F0E8" }, // jade
  { bg: "#5C4A9D", text: "#F5F0E8" }, // violet accent
  { bg: "#9D5C4A", text: "#F5F0E8" }, // terracotta accent
];

function hashName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Avatar({ name, image, className = "" }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  const { bg, text } = PALETTE[hashName(name) % PALETTE.length];

  return (
    <div
      className={`w-full h-full flex items-center justify-center font-display font-bold text-3xl ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {getInitials(name)}
    </div>
  );
}