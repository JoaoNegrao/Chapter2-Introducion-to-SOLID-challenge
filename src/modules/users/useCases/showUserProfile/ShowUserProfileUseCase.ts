import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const selectedUser = this.usersRepository.findById(user_id);

    if (!selectedUser) {
      throw new Error("Users do not exists!");
    }

    return selectedUser;
  }
}

export { ShowUserProfileUseCase };
