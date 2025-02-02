import Link from 'next/link';
import type { Metadata } from 'next';
import {getTranslations} from 'next-intl/server';

export type Dog = {
  id: number;
  type: string;
  attributes: {
    name: string;
    description: string;
  };
};

export const metadata: Metadata = {
  title: 'Quản lý chó',
  description: 'Quản lý giống chó trên hệ thống DogAPI',
};

async function DogManagementPage() {
  const res = await fetch('https://dogapi.dog/api/v2/breeds');
  const dataResponse = await res.json();
  const breedDogList = dataResponse.data;

  const t = await getTranslations('DogManagement');

  return (
    <div>
      <h2>{t('title')}</h2>
      <ul>
        {breedDogList.map((dog: Dog) => (
          <li key={`${dog.id}`}>
            <Link href={`/dog-management/${dog.id}`}>
              {dog.attributes.name} - {dog.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogManagementPage;
