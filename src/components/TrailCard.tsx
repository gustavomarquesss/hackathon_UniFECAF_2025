import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface TrailCardProps {
  image: string;
  title: string;
  percentage: number;
}

export default function TrailCard({ image, title, percentage }: TrailCardProps) {
  return (
    <div className="text-center d-flex flex-column align-items-center mx-3 my-3">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '280px',
          height: '160px',
          borderRadius: '10px',
          position: 'relative',
        }}
        className='cursor-pointer'
      ></div>
      <p className="text-light fw-bold mt-2">{title}</p>
      <div style={{ width: 100, marginTop: 10 }}>
        <CircularProgressbar
          value={percentage}
          maxValue={100}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: '#a8d0db',
            textColor: '#a8d0db',
            trailColor: '#a8a8a8',
            textSize: '24px',
          })}
        />
        <p className="text-white mt-2" style={{ fontSize: '14px' }}>0% do curso finalizado</p>
      </div>
    </div>
  );
}
