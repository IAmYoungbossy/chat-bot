const ErrorScreen = ({ error }: { error: string | null }) => {
  return (
    <div className="w-64 bg-gray-800 p-4 text-red-500">{error}</div>
  );
};

export default ErrorScreen;
