export default function RegisterButton() {
  return (
    <div
      onClick={() => window.location.href = '/sen-conference/register'}
      className="bg-sen-yorange px-8 py-3 rounded-full text-xl font-semibold text-center min-w-max cursor-pointer"
    >
      Get Tickets ↗
    </div>
  );
}
