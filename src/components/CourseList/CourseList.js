import { Box } from 'utils/Box';
import {
  StyledCourseList,
  StyledCourseItem,
  CourseTitle,
  Description,
  Image,
  Subtext,
  Quantity,
  Subtitle,
  SkillList,
  SkillItem,
  SkillItemText,
  StyledLink,
} from './CourseList.styled';

const CourseList = ({ currentItems }) => {
  return (
    <Box mb={5}>
      <StyledCourseList>
        {currentItems?.map(
          ({
            id,
            title,
            description,
            previewImageLink,
            lessonsCount,
            rating,
            meta,
          }) => (
            <StyledCourseItem key={id}>
              <StyledLink to={`/course/${id}`}>
                <CourseTitle>{title}</CourseTitle>
                <Description>{description}</Description>
                <Image
                  src={previewImageLink + '/cover.webp'}
                  alt={title}
                  width="320px"
                />
                <Subtext>
                  Lessons count: <Quantity>{lessonsCount}</Quantity>
                </Subtext>
                <Subtext>
                  Rating: <Quantity>{rating}</Quantity>
                </Subtext>
                {meta?.skills?.length && (
                  <>
                    <Subtitle>Skills</Subtitle>
                    <SkillList>
                      {meta?.skills?.map(item => (
                        <SkillItem key={id + '_' + item}>
                          <SkillItemText>{item}</SkillItemText>
                        </SkillItem>
                      ))}
                    </SkillList>
                  </>
                )}
              </StyledLink>
            </StyledCourseItem>
          )
        )}
      </StyledCourseList>
    </Box>
  );
};

export default CourseList;
