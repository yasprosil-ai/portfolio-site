export const SOCIAL_PLATFORMS = ["threads", "instagram", "tiktok", "youtube"];

export const POST_STATUSES = {
  draft: {
    label: "Draft",
    badgeClass: "border-white/12 bg-white/[0.05] text-slate-200",
  },
  scheduled: {
    label: "Scheduled",
    badgeClass: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
  },
  published: {
    label: "Published",
    badgeClass: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  },
  failed: {
    label: "Failed",
    badgeClass: "border-rose-300/20 bg-rose-300/10 text-rose-200",
  },
};

export const PLATFORM_ACCENTS = {
  threads: "from-slate-200/10 via-cyan-300/10 to-slate-200/5",
  instagram: "from-pink-400/12 via-amber-300/10 to-violet-400/12",
  tiktok: "from-cyan-300/12 via-fuchsia-400/10 to-white/5",
  youtube: "from-rose-400/12 via-amber-300/10 to-white/5",
};
