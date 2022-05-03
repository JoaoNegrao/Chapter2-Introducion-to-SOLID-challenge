import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const selectedUser = this.usersRepository.findById(user_id);

    if (!selectedUser) {
      throw new Error("The User do not exists");
    }

    if (selectedUser.admin === false) {
      throw new Error(
        `The User ${user_id} is not an Admin. So cannot list all users`
      );
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
