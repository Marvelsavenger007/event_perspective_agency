import { useState } from "react";
import { ceo, hods, teamMembers, officeSpaces } from "../data/team";
import TeamModal from "../components/ui/TeamModal";
import PageHero from "../components/ui/PageHero";
import Avatar from "../data/Avatar";

function TeamCard({ member, onClick }) {
  return (
    <div className="team-card group cursor-pointer" onClick={() => onClick(member)}>
      <div className="team-photo-wrap group-hover:brightness-75 transition-all duration-300 relative overflow-hidden aspect-square">
        <Avatar name={member.name} image={member.image} />
        <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-[0.7rem] tracking-[0.15em] uppercase text-black font-bold border border-black px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            Read Bio
          </span>
        </div>
      </div>
      <div className="font-display text-base font-bold text-navy-900 dark:text-white mt-4 mb-1">{member.name}</div>
      <div className="text-[0.7rem] tracking-[0.1em] uppercase text-gold font-semibold">{member.role}</div>
    </div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="The Minds Behind the"
        titleEm="Magic"
        description="Passionate, driven, and relentlessly creative — meet the team that makes the impossible look effortless."
      />

      <div className="py-20 px-6 md:px-12 bg-surface dark:bg-navy-900">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ── CEO ── */}
          <div>
            <h2 className="font-display text-2xl font-bold text-gold border-b border-surface-border dark:border-gold/20 pb-4 mb-12">
              Chief Executive Officer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-16 items-start">
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-b from-navy-700 to-navy-800 flex items-center justify-center overflow-hidden relative">
                  <Avatar name={ceo.name} image={ceo.image} />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
                </div>
                <div className="absolute top-[-10px] left-[-10px] right-[10px] bottom-[10px] border border-gold/25 pointer-events-none" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-black text-navy-900 dark:text-white mb-1">{ceo.name}</h2>
                <p className="text-[0.78rem] tracking-[0.2em] uppercase text-gold font-semibold mb-8">{ceo.role}</p>
                <blockquote className="font-display text-lg italic text-navy-700 dark:text-slate-200 leading-relaxed mb-8 pl-5 border-l-2 border-gold">
                  "{ceo.quote}"
                </blockquote>
                {ceo.bio.map((para, i) => (
                  <p key={i} className="text-sm text-navy-500 dark:text-dark-muted leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* ── HODs ── */}
          <div>
            <h2 className="font-display text-2xl font-bold text-gold border-b border-surface-border dark:border-gold/20 pb-4 mb-12">
              Heads of Department
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {hods.map((m) => (
                <TeamCard key={m.id} member={m} onClick={setSelected} />
              ))}
            </div>
          </div>

          {/* ── Operations Team ── */}
          {/* <div>
            <h2 className="font-display text-2xl font-bold text-gold border-b border-surface-border dark:border-gold/20 pb-4 mb-12">
              Operations Team
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {teamMembers.map((m) => (
                <TeamCard key={m.id} member={m} onClick={setSelected} />
              ))}
            </div>
          </div> */}

          {/* ── Office Gallery ── */}
          {/* <div>
            <h2 className="font-display text-2xl font-bold text-gold border-b border-surface-border dark:border-gold/20 pb-4 mb-10">
              Our Space
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 h-[480px] md:h-[520px]">
              {officeSpaces.map((space, i) => (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center overflow-hidden
                               ${space.span ? "md:row-span-2 col-span-2 md:col-span-1" : ""}`}
                >
                  <span className="text-4xl opacity-25">{space.emoji}</span>
                  <span className="absolute bottom-3 left-3 text-[0.62rem] tracking-[0.15em] uppercase text-gold font-semibold">
                    {space.label}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
    </>
  );
}