export default function SocialEmptyState({
  title = "Пока пусто",
  text = "Данные появятся позже, когда сюда подключится реальная логика.",
}) {
  return (
    <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] px-5 py-8 text-center">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}
