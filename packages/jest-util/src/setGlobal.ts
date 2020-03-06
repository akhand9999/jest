/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default (
  globalToMutate: NodeJS.Global | Window,
  key: string,
  value: unknown,
): void => {
  // @ts-ignore: no index
  globalToMutate[key] = value;
};