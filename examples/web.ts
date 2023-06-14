/*
 * Copyright (c) 2018-2023, NeKz
 *
 * SPDX-License-Identifier: MIT
 */

import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
import { serveFile } from 'https://deno.land/std@0.140.0/http/file_server.ts';

serve(async (req) => {
    return await serveFile(
        req,
        `${Deno.cwd()}${req.url.endsWith('/web.html') ? '/examples/web.html' : '/dist/sdp.esm.js'}`,
    );
});
