import { Dispose } from '@shared/models/disposal.model';
import { Unsubscriber, UnsubscriberAsync } from '@shared/utils/papi-util';

/**
 * Simple collection for UnsubscriberAsync objects that also provides an easy way to run them.
 */
export default class UnsubscriberAsyncList {
  readonly unsubscribers = new Set<UnsubscriberAsync | Unsubscriber>();

  /**
   * Add unsubscribers to the list. Note that duplicates are not added twice.
   * @param unsubscribers - Objects that were returned from a registration process.
   */
  add(...unsubscribers: (UnsubscriberAsync | Unsubscriber | Dispose)[]) {
    unsubscribers.forEach((unsubscriber) => {
      if ('dispose' in unsubscriber) this.unsubscribers.add(unsubscriber.dispose);
      else this.unsubscribers.add(unsubscriber);
    });
  }

  /**
   * Run all unsubscribers added to this list and then clear the list.
   * @returns `true` if all unsubscribers succeeded, `false` otherwise.
   */
  async runAllUnsubscribers(): Promise<boolean> {
    const unsubs = [...this.unsubscribers].map((unsubscriber) => unsubscriber());
    const results = await Promise.all(unsubs);
    this.unsubscribers.clear();
    return results.every((unsubscriberSucceeded) => unsubscriberSucceeded);
  }
}
