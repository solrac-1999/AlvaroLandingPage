// User model stub
interface UserType {
  _id?: string;
  email?: string;
  name?: string;
  customerId?: string;
  priceId?: string;
  hasAccess?: boolean;
  save?: () => Promise<void>;
}

const User = {
  findById: async (id: string): Promise<UserType | null> => null,
  findOne: async (query: Record<string, unknown>): Promise<UserType | null> => null,
  create: async (data: Record<string, unknown>): Promise<UserType> => ({ ...data, _id: "stub" } as UserType),
};

export default User;

