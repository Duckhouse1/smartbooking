import { ICardProps, Card } from "./Card";

const Cards: ICardProps[] = [
  { Title: "Title1", Description: "Dette er card 1" },
  { Title: "Title2", Description: "Dette er card 2" },
];

export const BodySection: React.FC = () => {
  return (
    <div style={{display: "flex"}}>
      {Cards.map((card) => (
        <Card Title={card.Title} Description={card.Description} />
      ))}
    </div>
  );
};
