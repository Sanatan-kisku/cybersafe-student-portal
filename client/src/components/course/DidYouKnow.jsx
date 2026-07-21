export default function DidYouKnow({ text }) {

  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5 mt-6">

      <h3 className="text-xl font-bold text-blue-700 mb-2">
        💡 Did You Know?
      </h3>

      <p className="text-gray-700 leading-7">
        {text}
      </p>

    </div>
  );
}