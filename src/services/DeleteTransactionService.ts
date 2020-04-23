import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const repository = await transactionsRepository.findOne(id);

    if (!repository) {
      throw new AppError('Repository not found');
    }

    await transactionsRepository.remove(repository);
  }
}

export default DeleteTransactionService;
