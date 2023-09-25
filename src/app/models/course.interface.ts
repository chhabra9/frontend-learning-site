export interface Course{
  course_id: number,
  title: string,
  thumbnail_url: string,
  description: string,
  instructor_id: string,
  creation_date? :Date,
  price:number
}
