import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const selectedUser = this.usersRepository.findById(user_id);

    if (!selectedUser) {
      throw new Error("User do not exists!");
    }

    return this.usersRepository.turnAdmin(selectedUser);
  }
}

export { TurnUserAdminUseCase };
