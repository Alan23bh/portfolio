type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function Callout({ title = "Note", children }: Props) {
  return (
    <div className="my-6 rounded-xl border border-gray-800 bg-white/5 p-4">
      <div className="mb-2 text-sm font-semibold text-white/90">{title}</div>
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
}
