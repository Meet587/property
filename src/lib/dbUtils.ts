import Property, { IProperty } from '@/models/Property';
import Contact, { IContact } from '@/models/Contact';
import dbConnect from './db';

export async function getFeaturedProperties(limit = 3): Promise<IProperty[]> {
  await dbConnect();
  return Property.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean() as unknown as IProperty[];
}

export async function getPropertyById(id: string): Promise<IProperty | null> {
  await dbConnect();
  return Property.findById(id).lean() as unknown as IProperty;
}

export async function createContactMessage(
  data: Omit<IContact, 'createdAt'>
): Promise<IContact> {
  await dbConnect();
  return Contact.create(data);
}

export async function searchProperties(
  query: string,
  page = 1,
  limit = 10
): Promise<{ properties: IProperty[]; total: number }> {
  await dbConnect();
  const skip = (page - 1) * limit;

  const [properties, total] = await Promise.all([
    Property.find({ $text: { $search: query } })
      .skip(skip)
      .limit(limit)
      .lean() as unknown as IProperty[],
    Property.countDocuments({ $text: { $search: query } }),
  ]);

  return { properties, total };
}