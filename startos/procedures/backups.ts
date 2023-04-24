import { setupBackups } from 'start-sdk/lib/backup'
import { Manifest } from '../manifest'

/**
 * Here we define what volumes to include in backups
 */
export const { createBackup, restoreBackup } = setupBackups<Manifest>('main')