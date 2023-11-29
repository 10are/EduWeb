import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEducations } from '../../redux/educations/educationSlice';

const EduCard = () => {
  const dispatch = useDispatch();
  const { educations } = useSelector((state) => state.educations);

  const [filteredEducations, setFilteredEducations] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]); 

  useEffect(() => {
    dispatch(getEducations());
  }, [dispatch]);

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
        <label>Filtrele: </label>
        <div className="filter-buttons space-x-2">
          {['doctor', 'engineer', 'lawyer', 'teacher', 'nurse', 'dentist'].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterToggle(type)}
              className={`${
                filterTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

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
          <p>Bu içerikte veri bulunmamaktır</p>
        )}
      </div>
    </div>
  );
};

export default EduCard;
