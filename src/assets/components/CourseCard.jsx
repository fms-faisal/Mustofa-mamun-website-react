// src/assets/components/CourseCard.jsx
import { Link } from 'react-router-dom';

export default function CourseCard({ code, title, image, link, isOnline }) {
  return (
    <Link to={link} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300 h-full">
      <figure className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${title} cover`}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src="https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found";
          }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-primary font-['Roboto_Slab']">{code}</h2>
        <p className="font-semibold text-base-content/90">
          {title}
          {isOnline && (
            <span className="text-secondary font-normal ml-2">(Online)</span>
          )}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary text-white btn-sm">View Details</button>
        </div>
      </div>
    </Link>
  )
}