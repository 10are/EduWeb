import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEducations } from '../../redux/educations/educationSlice';
import { useNavigate } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const EduCard = () => {
  const dispatch = useDispatch();
  const { educations } = useSelector((state) => state.educations);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const [filteredEducations, setFilteredEducations] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);

  useEffect(() => {
    if (educations && educations.data) {
      if (filterTypes.length > 0) {
        const filteredData = educations.data.filter((education) =>
          filterTypes.includes(education.attributes.type)
        );
        setFilteredEducations(filteredData);
      } else {
        setFilteredEducations(educations.data);
      }
    }
  }, [filterTypes, educations]);

  const handleFilterToggle = (type) => {
    if (filterTypes.includes(type)) {
      setFilterTypes(filterTypes.filter((filterType) => filterType !== type));
    } else {
      setFilterTypes([...filterTypes, type]);
    }
  };

  return (
    <div className="container mx-auto mt-8">

      <div>
        <label className=' font-bold text-3xl  font-normal text-[#C0B8AE]  pb-4'>Filter By Topic: </label>
        <div className="filter-buttons space-x-2">
          {['DOCTOR', 'ENGINEER', 'LAWYER', 'TEACHER', 'NURSE', 'DENTIST'].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterToggle(type)}
              className={`${filterTypes.includes(type) ? 'bg-[#FFCB33] text-white' : 'bg-white text-[#DFD9D2]  '
                } hover:bg-[#DFD9D2] hover:text-white py-2 px-4 rounded border border-gray-300 focus:outline-none focus:shadow-outline`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <h2 className="text-3xl flex items-center justify-center pt-5 pb-5 font-semibold text-[#C0B8AE] mb-4 border-b-4 border-[#C0B8AE] pb-3">
        COURSES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEducations.length > 0 ? (
          filteredEducations.map((education) => (
            <div key={education.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{education.attributes.name}</h3>
              <p className="text-gray-700 mb-4">{education.attributes.detail}</p>
              <p className="text-blue-500">Type: {education.attributes.type}</p>
            </div>
          ))
        ) : (
          <p>Bu içerikte veri bulunmamaktadır</p>
        )}
      </div>
    </div>
  );
};

export default EduCard;
