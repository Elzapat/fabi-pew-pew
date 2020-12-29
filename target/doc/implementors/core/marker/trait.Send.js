(function() {var implementors = {};
implementors["csfml_audio_sys"] = [{"text":"impl Send for sfMusic","synthetic":true,"types":[]},{"text":"impl Send for sfSound","synthetic":true,"types":[]},{"text":"impl Send for sfSoundBuffer","synthetic":true,"types":[]},{"text":"impl Send for sfSoundBufferRecorder","synthetic":true,"types":[]},{"text":"impl Send for sfSoundRecorder","synthetic":true,"types":[]},{"text":"impl Send for sfSoundStream","synthetic":true,"types":[]},{"text":"impl Send for sfTimeSpan","synthetic":true,"types":[]},{"text":"impl !Send for sfSoundStreamChunk","synthetic":true,"types":[]}];
implementors["csfml_graphics_sys"] = [{"text":"impl Send for sfBlendMode","synthetic":true,"types":[]},{"text":"impl Send for sfColor","synthetic":true,"types":[]},{"text":"impl Send for sfFloatRect","synthetic":true,"types":[]},{"text":"impl Send for sfIntRect","synthetic":true,"types":[]},{"text":"impl Send for sfCircleShape","synthetic":true,"types":[]},{"text":"impl Send for sfConvexShape","synthetic":true,"types":[]},{"text":"impl Send for sfFont","synthetic":true,"types":[]},{"text":"impl Send for sfImage","synthetic":true,"types":[]},{"text":"impl Send for sfShader","synthetic":true,"types":[]},{"text":"impl Send for sfRectangleShape","synthetic":true,"types":[]},{"text":"impl Send for sfRenderTexture","synthetic":true,"types":[]},{"text":"impl Send for sfRenderWindow","synthetic":true,"types":[]},{"text":"impl Send for sfShape","synthetic":true,"types":[]},{"text":"impl Send for sfSprite","synthetic":true,"types":[]},{"text":"impl Send for sfText","synthetic":true,"types":[]},{"text":"impl Send for sfTexture","synthetic":true,"types":[]},{"text":"impl Send for sfTransformable","synthetic":true,"types":[]},{"text":"impl Send for sfVertexArray","synthetic":true,"types":[]},{"text":"impl Send for sfVertexBuffer","synthetic":true,"types":[]},{"text":"impl Send for sfView","synthetic":true,"types":[]},{"text":"impl Send for sfTransform","synthetic":true,"types":[]},{"text":"impl !Send for sfFontInfo","synthetic":true,"types":[]},{"text":"impl Send for sfGlyph","synthetic":true,"types":[]},{"text":"impl !Send for sfRenderStates","synthetic":true,"types":[]},{"text":"impl Send for sfVertex","synthetic":true,"types":[]},{"text":"impl Send for sfGlslBvec2","synthetic":true,"types":[]},{"text":"impl Send for sfGlslIvec3","synthetic":true,"types":[]},{"text":"impl Send for sfGlslBvec3","synthetic":true,"types":[]},{"text":"impl Send for sfGlslVec4","synthetic":true,"types":[]},{"text":"impl Send for sfGlslIvec4","synthetic":true,"types":[]},{"text":"impl Send for sfGlslBvec4","synthetic":true,"types":[]},{"text":"impl Send for sfGlslMat3","synthetic":true,"types":[]},{"text":"impl Send for sfGlslMat4","synthetic":true,"types":[]}];
implementors["csfml_system_sys"] = [{"text":"impl Send for sfTime","synthetic":true,"types":[]},{"text":"impl Send for sfClock","synthetic":true,"types":[]},{"text":"impl Send for sfMutex","synthetic":true,"types":[]},{"text":"impl Send for sfThread","synthetic":true,"types":[]},{"text":"impl !Send for sfInputStream","synthetic":true,"types":[]},{"text":"impl Send for sfVector2i","synthetic":true,"types":[]},{"text":"impl Send for sfVector2u","synthetic":true,"types":[]},{"text":"impl Send for sfVector2f","synthetic":true,"types":[]},{"text":"impl Send for sfVector3f","synthetic":true,"types":[]}];
implementors["csfml_window_sys"] = [{"text":"impl Send for sfContext","synthetic":true,"types":[]},{"text":"impl Send for sfCursor","synthetic":true,"types":[]},{"text":"impl Send for sfWindow","synthetic":true,"types":[]},{"text":"impl !Send for sfJoystickIdentification","synthetic":true,"types":[]},{"text":"impl Send for sfKeyEvent","synthetic":true,"types":[]},{"text":"impl Send for sfTextEvent","synthetic":true,"types":[]},{"text":"impl Send for sfMouseMoveEvent","synthetic":true,"types":[]},{"text":"impl Send for sfMouseButtonEvent","synthetic":true,"types":[]},{"text":"impl Send for sfMouseWheelEvent","synthetic":true,"types":[]},{"text":"impl Send for sfMouseWheelScrollEvent","synthetic":true,"types":[]},{"text":"impl Send for sfJoystickMoveEvent","synthetic":true,"types":[]},{"text":"impl Send for sfJoystickButtonEvent","synthetic":true,"types":[]},{"text":"impl Send for sfJoystickConnectEvent","synthetic":true,"types":[]},{"text":"impl Send for sfSizeEvent","synthetic":true,"types":[]},{"text":"impl Send for sfTouchEvent","synthetic":true,"types":[]},{"text":"impl Send for sfSensorEvent","synthetic":true,"types":[]},{"text":"impl Send for sfVideoMode","synthetic":true,"types":[]},{"text":"impl Send for sfContextSettings","synthetic":true,"types":[]},{"text":"impl Send for sfEvent","synthetic":true,"types":[]}];
implementors["getrandom"] = [{"text":"impl Send for Error","synthetic":true,"types":[]}];
implementors["libc"] = [{"text":"impl !Send for group","synthetic":true,"types":[]},{"text":"impl Send for utimbuf","synthetic":true,"types":[]},{"text":"impl Send for timeval","synthetic":true,"types":[]},{"text":"impl Send for timespec","synthetic":true,"types":[]},{"text":"impl Send for rlimit","synthetic":true,"types":[]},{"text":"impl Send for rusage","synthetic":true,"types":[]},{"text":"impl Send for ipv6_mreq","synthetic":true,"types":[]},{"text":"impl !Send for hostent","synthetic":true,"types":[]},{"text":"impl !Send for iovec","synthetic":true,"types":[]},{"text":"impl Send for pollfd","synthetic":true,"types":[]},{"text":"impl Send for winsize","synthetic":true,"types":[]},{"text":"impl Send for linger","synthetic":true,"types":[]},{"text":"impl !Send for sigval","synthetic":true,"types":[]},{"text":"impl Send for itimerval","synthetic":true,"types":[]},{"text":"impl Send for tms","synthetic":true,"types":[]},{"text":"impl !Send for servent","synthetic":true,"types":[]},{"text":"impl !Send for protoent","synthetic":true,"types":[]},{"text":"impl Send for in_addr","synthetic":true,"types":[]},{"text":"impl Send for ip_mreq","synthetic":true,"types":[]},{"text":"impl Send for ip_mreq_source","synthetic":true,"types":[]},{"text":"impl Send for sockaddr","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_in","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_in6","synthetic":true,"types":[]},{"text":"impl !Send for addrinfo","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_ll","synthetic":true,"types":[]},{"text":"impl Send for fd_set","synthetic":true,"types":[]},{"text":"impl !Send for tm","synthetic":true,"types":[]},{"text":"impl Send for sched_param","synthetic":true,"types":[]},{"text":"impl !Send for Dl_info","synthetic":true,"types":[]},{"text":"impl !Send for lconv","synthetic":true,"types":[]},{"text":"impl Send for in_pktinfo","synthetic":true,"types":[]},{"text":"impl !Send for ifaddrs","synthetic":true,"types":[]},{"text":"impl Send for in6_rtmsg","synthetic":true,"types":[]},{"text":"impl Send for arpreq","synthetic":true,"types":[]},{"text":"impl Send for arpreq_old","synthetic":true,"types":[]},{"text":"impl Send for arphdr","synthetic":true,"types":[]},{"text":"impl !Send for mmsghdr","synthetic":true,"types":[]},{"text":"impl Send for epoll_event","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_un","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_storage","synthetic":true,"types":[]},{"text":"impl Send for utsname","synthetic":true,"types":[]},{"text":"impl !Send for sigevent","synthetic":true,"types":[]},{"text":"impl Send for rlimit64","synthetic":true,"types":[]},{"text":"impl !Send for glob_t","synthetic":true,"types":[]},{"text":"impl !Send for passwd","synthetic":true,"types":[]},{"text":"impl !Send for spwd","synthetic":true,"types":[]},{"text":"impl Send for dqblk","synthetic":true,"types":[]},{"text":"impl Send for signalfd_siginfo","synthetic":true,"types":[]},{"text":"impl Send for itimerspec","synthetic":true,"types":[]},{"text":"impl Send for fsid_t","synthetic":true,"types":[]},{"text":"impl Send for packet_mreq","synthetic":true,"types":[]},{"text":"impl Send for cpu_set_t","synthetic":true,"types":[]},{"text":"impl !Send for if_nameindex","synthetic":true,"types":[]},{"text":"impl Send for msginfo","synthetic":true,"types":[]},{"text":"impl Send for sembuf","synthetic":true,"types":[]},{"text":"impl Send for input_event","synthetic":true,"types":[]},{"text":"impl Send for input_id","synthetic":true,"types":[]},{"text":"impl Send for input_absinfo","synthetic":true,"types":[]},{"text":"impl Send for input_keymap_entry","synthetic":true,"types":[]},{"text":"impl Send for input_mask","synthetic":true,"types":[]},{"text":"impl Send for ff_replay","synthetic":true,"types":[]},{"text":"impl Send for ff_trigger","synthetic":true,"types":[]},{"text":"impl Send for ff_envelope","synthetic":true,"types":[]},{"text":"impl Send for ff_constant_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_ramp_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_condition_effect","synthetic":true,"types":[]},{"text":"impl !Send for ff_periodic_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_rumble_effect","synthetic":true,"types":[]},{"text":"impl Send for ff_effect","synthetic":true,"types":[]},{"text":"impl !Send for dl_phdr_info","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Ehdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Ehdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Sym","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Sym","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Phdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Phdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Shdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Shdr","synthetic":true,"types":[]},{"text":"impl Send for Elf32_Chdr","synthetic":true,"types":[]},{"text":"impl Send for Elf64_Chdr","synthetic":true,"types":[]},{"text":"impl Send for ucred","synthetic":true,"types":[]},{"text":"impl !Send for mntent","synthetic":true,"types":[]},{"text":"impl !Send for posix_spawn_file_actions_t","synthetic":true,"types":[]},{"text":"impl Send for posix_spawnattr_t","synthetic":true,"types":[]},{"text":"impl Send for genlmsghdr","synthetic":true,"types":[]},{"text":"impl Send for in6_pktinfo","synthetic":true,"types":[]},{"text":"impl Send for arpd_request","synthetic":true,"types":[]},{"text":"impl Send for inotify_event","synthetic":true,"types":[]},{"text":"impl Send for fanotify_response","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_vm","synthetic":true,"types":[]},{"text":"impl Send for regmatch_t","synthetic":true,"types":[]},{"text":"impl Send for sock_extended_err","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_nl","synthetic":true,"types":[]},{"text":"impl Send for dirent","synthetic":true,"types":[]},{"text":"impl Send for dirent64","synthetic":true,"types":[]},{"text":"impl Send for sockaddr_alg","synthetic":true,"types":[]},{"text":"impl Send for af_alg_iv","synthetic":true,"types":[]},{"text":"impl Send for mq_attr","synthetic":true,"types":[]},{"text":"impl Send for statx","synthetic":true,"types":[]},{"text":"impl Send for statx_timestamp","synthetic":true,"types":[]},{"text":"impl !Send for aiocb","synthetic":true,"types":[]},{"text":"impl Send for __exit_status","synthetic":true,"types":[]},{"text":"impl Send for __timeval","synthetic":true,"types":[]},{"text":"impl !Send for glob64_t","synthetic":true,"types":[]},{"text":"impl !Send for msghdr","synthetic":true,"types":[]},{"text":"impl Send for cmsghdr","synthetic":true,"types":[]},{"text":"impl Send for termios","synthetic":true,"types":[]},{"text":"impl Send for mallinfo","synthetic":true,"types":[]},{"text":"impl Send for nlmsghdr","synthetic":true,"types":[]},{"text":"impl Send for nlmsgerr","synthetic":true,"types":[]},{"text":"impl Send for nl_pktinfo","synthetic":true,"types":[]},{"text":"impl Send for nl_mmap_req","synthetic":true,"types":[]},{"text":"impl Send for nl_mmap_hdr","synthetic":true,"types":[]},{"text":"impl Send for nlattr","synthetic":true,"types":[]},{"text":"impl !Send for rtentry","synthetic":true,"types":[]},{"text":"impl Send for timex","synthetic":true,"types":[]},{"text":"impl Send for ntptimeval","synthetic":true,"types":[]},{"text":"impl !Send for regex_t","synthetic":true,"types":[]},{"text":"impl Send for utmpx","synthetic":true,"types":[]},{"text":"impl Send for sigset_t","synthetic":true,"types":[]},{"text":"impl Send for sysinfo","synthetic":true,"types":[]},{"text":"impl Send for msqid_ds","synthetic":true,"types":[]},{"text":"impl Send for sigaction","synthetic":true,"types":[]},{"text":"impl Send for statfs","synthetic":true,"types":[]},{"text":"impl Send for flock","synthetic":true,"types":[]},{"text":"impl Send for flock64","synthetic":true,"types":[]},{"text":"impl Send for siginfo_t","synthetic":true,"types":[]},{"text":"impl !Send for stack_t","synthetic":true,"types":[]},{"text":"impl Send for stat","synthetic":true,"types":[]},{"text":"impl Send for stat64","synthetic":true,"types":[]},{"text":"impl Send for statfs64","synthetic":true,"types":[]},{"text":"impl Send for statvfs64","synthetic":true,"types":[]},{"text":"impl Send for pthread_attr_t","synthetic":true,"types":[]},{"text":"impl Send for _libc_fpxreg","synthetic":true,"types":[]},{"text":"impl Send for _libc_xmmreg","synthetic":true,"types":[]},{"text":"impl Send for _libc_fpstate","synthetic":true,"types":[]},{"text":"impl Send for user_regs_struct","synthetic":true,"types":[]},{"text":"impl !Send for user","synthetic":true,"types":[]},{"text":"impl !Send for mcontext_t","synthetic":true,"types":[]},{"text":"impl Send for ipc_perm","synthetic":true,"types":[]},{"text":"impl Send for shmid_ds","synthetic":true,"types":[]},{"text":"impl Send for termios2","synthetic":true,"types":[]},{"text":"impl Send for ip_mreqn","synthetic":true,"types":[]},{"text":"impl Send for user_fpregs_struct","synthetic":true,"types":[]},{"text":"impl !Send for ucontext_t","synthetic":true,"types":[]},{"text":"impl Send for statvfs","synthetic":true,"types":[]},{"text":"impl Send for max_align_t","synthetic":true,"types":[]},{"text":"impl Send for sem_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_mutexattr_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_rwlockattr_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_condattr_t","synthetic":true,"types":[]},{"text":"impl Send for fanotify_event_metadata","synthetic":true,"types":[]},{"text":"impl Send for pthread_cond_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_mutex_t","synthetic":true,"types":[]},{"text":"impl Send for pthread_rwlock_t","synthetic":true,"types":[]},{"text":"impl Send for in6_addr","synthetic":true,"types":[]},{"text":"impl Send for DIR","synthetic":true,"types":[]},{"text":"impl Send for FILE","synthetic":true,"types":[]},{"text":"impl Send for fpos_t","synthetic":true,"types":[]},{"text":"impl Send for timezone","synthetic":true,"types":[]},{"text":"impl Send for fpos64_t","synthetic":true,"types":[]}];
implementors["ppv_lite86"] = [{"text":"impl Send for YesS3","synthetic":true,"types":[]},{"text":"impl Send for NoS3","synthetic":true,"types":[]},{"text":"impl Send for YesS4","synthetic":true,"types":[]},{"text":"impl Send for NoS4","synthetic":true,"types":[]},{"text":"impl Send for YesA1","synthetic":true,"types":[]},{"text":"impl Send for NoA1","synthetic":true,"types":[]},{"text":"impl Send for YesA2","synthetic":true,"types":[]},{"text":"impl Send for NoA2","synthetic":true,"types":[]},{"text":"impl Send for YesNI","synthetic":true,"types":[]},{"text":"impl Send for NoNI","synthetic":true,"types":[]},{"text":"impl&lt;S3, S4, NI&gt; Send for SseMachine&lt;S3, S4, NI&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NI: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S3: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S4: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;NI&gt; Send for Avx2Machine&lt;NI&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;NI: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for vec128_storage","synthetic":true,"types":[]},{"text":"impl Send for vec256_storage","synthetic":true,"types":[]},{"text":"impl Send for vec512_storage","synthetic":true,"types":[]}];
implementors["rand"] = [{"text":"impl Send for Bernoulli","synthetic":true,"types":[]},{"text":"impl Send for Open01","synthetic":true,"types":[]},{"text":"impl Send for OpenClosed01","synthetic":true,"types":[]},{"text":"impl Send for Alphanumeric","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Send for Uniform&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X as SampleUniform&gt;::Sampler: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Send for WeightedIndex&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X as SampleUniform&gt;::Sampler: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D, R, T&gt; Send for DistIter&lt;D, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Standard","synthetic":true,"types":[]},{"text":"impl Send for BernoulliError","synthetic":true,"types":[]},{"text":"impl Send for WeightedError","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Send for UniformInt&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UniformChar","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Send for UniformFloat&lt;X&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;X: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UniformDuration","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for WeightedIndex&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for StdRng","synthetic":true,"types":[]},{"text":"impl !Send for ThreadRng","synthetic":true,"types":[]},{"text":"impl Send for ReadError","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for ReadRng&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R, Rsdr&gt; Send for ReseedingRng&lt;R, Rsdr&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rsdr: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for StepRng","synthetic":true,"types":[]},{"text":"impl&lt;'a, S:&nbsp;?Sized, T&gt; Send for SliceChooseIter&lt;'a, S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for IndexVec","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for IndexVecIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for IndexVecIntoIter","synthetic":true,"types":[]}];
implementors["rand_chacha"] = [{"text":"impl Send for ChaCha12Core","synthetic":true,"types":[]},{"text":"impl Send for ChaCha12Rng","synthetic":true,"types":[]},{"text":"impl Send for ChaCha20Core","synthetic":true,"types":[]},{"text":"impl Send for ChaCha20Rng","synthetic":true,"types":[]},{"text":"impl Send for ChaCha8Core","synthetic":true,"types":[]},{"text":"impl Send for ChaCha8Rng","synthetic":true,"types":[]}];
implementors["rand_core"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for OsRng","synthetic":true,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized&gt; Send for BlockRng&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized&gt; Send for BlockRng64&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R as BlockRngCore&gt;::Results: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["sfml"] = [{"text":"impl !Send for Music","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for Sound&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for SoundBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; !Send for SoundStreamPlayer&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl Send for TimeSpan","synthetic":true,"types":[]},{"text":"impl Send for SoundStatus","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; !Send for SoundRecorderDriver&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl !Send for SoundBufferRecorder","synthetic":true,"types":[]},{"text":"impl Send for SetDeviceError","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for CircleShape&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for Color","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for ConvexShape&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl !Send for ConvexShapePoints","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for CustomShape&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for Font","synthetic":true,"types":[]},{"text":"impl Send for Info","synthetic":true,"types":[]},{"text":"impl Send for Glyph","synthetic":true,"types":[]},{"text":"impl !Send for Image","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Rect&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for RectangleShape&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'texture, 'shader, 'shader_texture&gt; !Send for RenderStates&lt;'texture, 'shader, 'shader_texture&gt;","synthetic":true,"types":[]},{"text":"impl !Send for RenderTexture","synthetic":true,"types":[]},{"text":"impl !Send for RenderWindow","synthetic":true,"types":[]},{"text":"impl&lt;'texture&gt; !Send for Shader&lt;'texture&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for Sprite&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'s&gt; !Send for Text&lt;'s&gt;","synthetic":true,"types":[]},{"text":"impl Send for TextStyle","synthetic":true,"types":[]},{"text":"impl Send for Texture","synthetic":true,"types":[]},{"text":"impl Send for Transform","synthetic":true,"types":[]},{"text":"impl Send for Vertex","synthetic":true,"types":[]},{"text":"impl !Send for VertexArray","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Vertices&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for View","synthetic":true,"types":[]},{"text":"impl Send for PrimitiveType","synthetic":true,"types":[]},{"text":"impl Send for BlendMode","synthetic":true,"types":[]},{"text":"impl Send for Factor","synthetic":true,"types":[]},{"text":"impl Send for Equation","synthetic":true,"types":[]},{"text":"impl Send for Vec4","synthetic":true,"types":[]},{"text":"impl Send for IVec4","synthetic":true,"types":[]},{"text":"impl Send for BVec4","synthetic":true,"types":[]},{"text":"impl Send for Mat3","synthetic":true,"types":[]},{"text":"impl Send for Mat4","synthetic":true,"types":[]},{"text":"impl !Send for Clock","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for SfBox&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Send for SfStr","synthetic":true,"types":[]},{"text":"impl Send for Time","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Vector2&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Vector3&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for Context","synthetic":true,"types":[]},{"text":"impl Send for ContextSettings","synthetic":true,"types":[]},{"text":"impl Send for Style","synthetic":true,"types":[]},{"text":"impl Send for VideoMode","synthetic":true,"types":[]},{"text":"impl !Send for Window","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for Identification","synthetic":true,"types":[]},{"text":"impl Send for Axis","synthetic":true,"types":[]},{"text":"impl Send for Button","synthetic":true,"types":[]},{"text":"impl Send for Wheel","synthetic":true,"types":[]},{"text":"impl Send for Type","synthetic":true,"types":[]}];
implementors["widestring"] = [{"text":"impl&lt;C&gt; Send for MissingNulError&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for UCStr&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for UCString&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for NulError&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for FromUtf32Error","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for UStr&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for UString&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()