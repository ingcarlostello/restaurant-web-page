import React from 'react';

const ContactInfoCard = ({contactInfo}) => {
    return (
      <div className="md:flex shadow-lg my-5 w-8/12">
        <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
          <div className="flex-grow p-3">
            <div className="text-gray-500 text-center">
              <a>
                {/* <i className={`${data.socialNetworkIcon} text-5xl`}></i> */}
                <i className="fa-solid fa-book-user text-5xl"></i>
                <div className="font-semibold text-gray-700">
                  {contactInfo}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactInfoCard;