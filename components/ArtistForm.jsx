"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required")
});

const categories = ["Singer", "DJ", "Dancer", "Speaker"];
const languages = ["Hindi", "English", "Punjabi", "Tamil"];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Artist Data:", data);
    alert("Submitted to console!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl px-8 py-10 space-y-6 animate-fadeIn"
    >
      <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">
        🎤 Artist Onboarding Form
      </h2>

      {/* Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name</label>
        <input
          {...register("name")}
          placeholder="Enter full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Bio</label>
        <textarea
          {...register("bio")}
          placeholder="Write about the artist..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Category</label>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" value={cat} {...register("category")} />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
      </div>

      {/* Languages */}
      <div>
        <label className="block mb-2 font-medium text-gray-700">Languages Spoken</label>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <label key={lang} className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
      </div>

      {/* Fee */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Fee Range</label>
        <select
          {...register("fee")}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select</option>
          <option value="₹3000 - ₹5000">₹3000 - ₹5000</option>
          <option value="₹5000 - ₹10000">₹5000 - ₹10000</option>
          <option value="₹10000+">₹10000+</option>
        </select>
        <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Location</label>
        <input
          {...register("location")}
          placeholder="e.g., Delhi, Mumbai"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
      </div>

      {/* Image */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Profile Image (optional)</label>
        <input
          type="file"
          {...register("image")}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-lg font-semibold text-lg"
      >
        Submit
      </button>
    </form>
  );
}
