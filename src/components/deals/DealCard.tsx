
// ... all imports remain the same ...

// Inside the JSX, replace the Title block with this:

<Link to={`/deal/${id}`} className="hover:text-primary">
  <h2 className="text-base md:text-lg font-semibold leading-snug mb-1">
    {title} <span className="text-red-600 text-xs font-bold">[TEST ACTIVE]</span>
  </h2>
</Link>
