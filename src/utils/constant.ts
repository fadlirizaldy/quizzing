import { IQuizType } from "./utils.interface";

export const QUIZ_TYPE: IQuizType[] = [
  {
    id: 1,
    title: "General",
    typeId: 9,
    icon: "./general.png",
    description:
      "A mix of questions from all topics—perfect for those who love to test their knowledge on a little bit of everything!",
  },
  {
    id: 2,
    title: "Animals",
    typeId: 27,
    icon: "./animal.png",
    description:
      "Explore the wonders of the animal kingdom! Test your knowledge of wildlife, habitats, and fascinating creatures from around the world.",
  },
  {
    id: 3,
    title: "Computer Science",
    typeId: 18,
    icon: "./computer.png",
    description:
      "Dive into the world of technology and coding! From algorithms to hardware, see how well you know the digital world.",
  },
  {
    id: 4,
    title: "Mathematics",
    typeId: 19,
    icon: "./math.png",
    description:
      "Challenge your problem-solving skills with fun math puzzles, equations, and brain teasers for all levels!",
  },
  {
    id: 5,
    title: "Art",
    typeId: 25,
    icon: "./art.png",
    description:
      "Discover the beauty of art history, famous masterpieces, and creative techniques. A perfect quiz for art enthusiasts!",
  },
  {
    id: 6,
    title: "Sport",
    typeId: 21,
    icon: "./sport.png",
    description:
      "How much do you know about your favorite sports and athletes? Put your sports trivia to the test!",
  },
];
