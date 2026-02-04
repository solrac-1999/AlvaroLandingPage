// Lead model stub - implement with actual Mongoose schema if needed
interface LeadType {
  email: string;
  createdAt: Date;
  _id?: string;
}

const Lead = {
  findOne: async (query: { email: string }): Promise<LeadType | null> => null,
  create: async (data: { email: string }): Promise<LeadType> => ({ ...data, createdAt: new Date() }),
};

export default Lead;

