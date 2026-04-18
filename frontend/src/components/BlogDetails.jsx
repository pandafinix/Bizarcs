import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Blog #{id} Details
      </h2>
      <p className="text-gray-600">
        This is a dummy blog details page for blog with ID <strong>{id}</strong>.
      </p>
    </div>
  );
}
