import { formatDateTime, getStatusMeta, truncateText } from "../lib/social-formatters.js";
import SocialEmptyState from "./SocialEmptyState.jsx";

export default function PostsTable({ posts }) {
  if (!posts?.length) {
    return (
      <SocialEmptyState
        title="Постов пока нет"
        text="Когда подключится реальный data layer, здесь появится история публикаций и статусов."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1628]/78">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.03] text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Дата</th>
              <th className="px-4 py-3 font-medium">Статус</th>
              <th className="px-4 py-3 font-medium">Превью</th>
              <th className="px-4 py-3 font-medium">Первый комментарий</th>
              <th className="px-4 py-3 font-medium">Действия</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              const statusMeta = getStatusMeta(post.status);
              const dateValue = post.scheduledAt ?? post.publishedAt;

              return (
                <tr key={post.id} className="border-b border-white/6 last:border-b-0">
                  <td className="px-4 py-4 text-slate-300">{formatDateTime(dateValue)}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusMeta.badgeClass}`}>
                      {statusMeta.label}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-200">{truncateText(post.body, 90)}</td>
                  <td className="px-4 py-4 text-slate-400">{truncateText(post.firstComment, 70)}</td>
                  <td className="px-4 py-4 text-slate-500">Mock actions</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
