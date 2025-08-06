type RarityCardProps = {
    rarity: string;
    title: string;
    description: string;
};

const RarityCard = ({ rarity, title, description }: RarityCardProps) => (
    <div className="border border-gray-600 p-5 rounded-lg">
        <h3 className="text-yellow-400 font-bold">{rarity}</h3>
        <h4 className="text-xl">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
    </div>
);

export default RarityCard;
