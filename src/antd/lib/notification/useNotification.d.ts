import * as React from 'react';
import type { NotificationInstance, NotificationConfig } from './interface';
type HolderProps = NotificationConfig & {
    onAllRemoved?: VoidFunction;
};
export declare function useInternalNotification(notificationConfig?: HolderProps): readonly [NotificationInstance, React.ReactElement];
export default function useNotification(notificationConfig?: NotificationConfig): readonly [NotificationInstance, React.ReactElement<any, string | React.JSXElementConstructor<any>>];
export {};
