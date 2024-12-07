import React, { useState } from "react";
import DatePicker from "react-datepicker";

const ContactForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const formatDateTime = (date: Date | null): string => {
    if (!date) return "";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  return (
    <div className="w-full">
      <form className=" text-slate-600 " action="submit">
        <div className="flex items-center">
          <input
            className="border rounded-2xl py-3 px-4 w-full"
            size={50}
            type="text"
            placeholder="Name..."
          />
        </div>
        <br />
        <div className="items-center">
          <input
            className="border  rounded-2xl  py-3 px-4 w-full"
            size={50}
            type="email"
            placeholder="Email..."
          />
        </div>
        <br />

        <div>
          <input
            className="border rounded-2xl  py-3 px-4 w-full"
            size={50}
            type="phone"
            placeholder="Phone..."
          />
        </div>
        <br />
        <div className="w-full flex items-center justify-between my-3">
          <label className="text-white-200 " htmlFor="Time and Date">
            Date and Time
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            showTimeSelect
            dateFormat="yyyy-MM-dd h:mm aa"
            timeFormat="HH:mm"
            customInput={
              <input
                size={50}
                className="w-full border rounded-2xl py-3 px-4 text-white-200"
                type="text"
                placeholder="Select date and time"
                value={formatDateTime(selectedDate)}
                readOnly
              />
            }
          />
        </div>
        <br />
        <div>
          <label className="text-white" htmlFor="email">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Type your message..."
            className="border rounded-2xl py-3 px-4 mt-2 w-full min-h-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
