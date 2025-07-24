function SubmittedBookingsTable({ bookings }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Submitted Bookings</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="p-2 border">{booking.name}</td>
              <td className="p-2 border">{booking.email}</td>
              <td className="p-2 border">{booking.phone}</td>
              <td className="p-2 border">{booking.course}</td>
              <td className="p-2 border">{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmittedBookingsTable;
