import Skeleton from 'components/Skeleton';
import { useGetAllCoursesQuery } from 'redux/CourseSlice';

const CourseList = () => {
  const { data, isFetching } = useGetAllCoursesQuery();

  console.log('data', data);

  return (
    <>
      {isFetching ? (
        <Skeleton />
      ) : (
        <ul>
          {data?.courses?.map(
            ({
              id,
              title,
              description,
              previewImageLink,
              lessonsCount,
              rating,
              meta,
            }) => (
              <li key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <img
                  src={previewImageLink + '/cover.webp'}
                  alt={title}
                  width="320px"
                />
                <p>Lessons count: {lessonsCount}</p>
                <p>Rating: {rating}</p>
                <h3>Skills</h3>
                <ul>
                  {meta?.skills?.map(item => (
                    <li key={id + '_' + item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default CourseList;
