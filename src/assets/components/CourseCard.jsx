import { Link } from 'react-router-dom'

export default function CourseCard({ code, title, image, link, isOnline }) {
  return (
    <Link to={link}>
      <div className="card bg-base-100 w-72 shadow-md hover:animate-pulse border-2 hover:border-b-8 hover:border-green-500 border-gray-100 mx-auto h-full">
        <figure className="lg:px-8 lg:pt-5 hidden lg:flex">
          <img
            src={image}
            alt={`${title} cover`}
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src="https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found";
            }}
            className="rounded-xl hidden lg:flex lg:h-36 lg:w-52 object-cover"
          />
        </figure>
        <div className="card-body p-5 items-center text-center">
          <h2 className="card-title">{code}</h2>
          <p className="font-semibold text-gray-700 dark:text-gray-100">
            {title}
            {isOnline && (
              <span className="text-green-500 font-normal animate-pulse"> (Online)</span>
            )}
          </p>
        </div>
      </div>
    </Link>
  )
}