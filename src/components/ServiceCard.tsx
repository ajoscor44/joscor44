import { Shield, Tv, Gamepad, Users } from 'lucide-react';
import type { Service } from '../types';

const serviceIcons = {
  VPN: Shield,
  Streaming: Tv,
  Gaming: Gamepad,
  Social: Users,
};

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const Icon = serviceIcons[service.type];

  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer border border-gray-700 hover:border-primary-500"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-primary-400" />
          <span className="text-lg font-semibold text-white">{service.name}</span>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-white">
            ${service.price}
          </span>
          <span className="text-gray-400 text-sm block">
            /{service.duration}
          </span>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}